using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalProductionUseRepository
    {
        Task<IEnumerable<AnimalProductionUse>> GetAllAsync();
        Task<AnimalProductionUse?> GetByIdAsync(int id);
    }
}
