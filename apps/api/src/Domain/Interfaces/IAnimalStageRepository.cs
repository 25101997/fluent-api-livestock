using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IAnimalStageRepository
    {
        Task<IEnumerable<AnimalStage>> GetAllAsync();
        Task<AnimalStage?> GetByIdAsync(int id);
    }
}
