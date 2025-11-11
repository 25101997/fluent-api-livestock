using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class AnimalStageRepository : IAnimalStageRepository
    {
        private readonly AppDbContext _context;

        public AnimalStageRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AnimalStage>> GetAllAsync() =>
            await _context.AnimalStages
                .AsNoTracking()
                .ToListAsync();

        public async Task<AnimalStage?> GetByIdAsync(int id) =>
            await _context.AnimalStages
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id);
    }
}
