using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalBreedRepository
    {
        Task<IEnumerable<AnimalBreed>> GetAllAsync();
        Task<AnimalBreed?> GetByIdAsync(int id);
    }
}
