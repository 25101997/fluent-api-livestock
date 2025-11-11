using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalStatusRepository
    {
        Task<IEnumerable<AnimalStatus>> GetAllAsync();
        Task<AnimalStatus?> GetByIdAsync(int id);
    }
}
