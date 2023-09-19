using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Stripe;
using StripeWebApiExample.Services;
using SystemWeb.IAPIMailService;
using SystemWeb.Models;
using SystemWeb.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddTransient<IAPIMail, APIMailService>();
builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
builder.Services.AddHttpClient("MailTrapApiClient", (services, client) =>
{
    
    var mailSettings = services.GetRequiredService<IOptions<MailSettings>>().Value;
    client.BaseAddress = new Uri(mailSettings.ApiBaseUrl);
    client.DefaultRequestHeaders.Add("Api-Token", mailSettings.ApiToken);
});
builder.Services.AddScoped<TokenService>();
builder.Services.AddScoped<CustomerService>();
builder.Services.AddScoped<ChargeService>();
StripeConfiguration.ApiKey = builder.Configuration.GetValue<string>("StripeOptions:SecretKey");

builder.Services.AddScoped<IStripeService, StripeService>();


builder.Services.AddControllers();
var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();
builder.Services.AddCors(options =>
{
    var FrontendUrl = configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(FrontendUrl).AllowAnyMethod().AllowAnyHeader();
    });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
