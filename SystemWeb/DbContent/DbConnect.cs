using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SystemWeb.Models;

namespace SystemWeb.DbContent
{
    public class DbConnect : DbContext
    {
        public DbConnect(DbContextOptions<DbConnect> options) : base(options) { }
        
        DbSet<Client> clients { get; set; }
    }
}
