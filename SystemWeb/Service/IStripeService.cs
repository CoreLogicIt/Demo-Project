using SystemWeb.Resources;

namespace SystemWeb.Service
{
    public interface IStripeService
    {
     
            Task<CustomerResource> CreateCustomer(CreateCustomerResource resource, CancellationToken cancellationToken);
            Task<ChargeResource> CreateCharge(CreateChargeResource resource, CancellationToken cancellationToken);
        
    }
}
