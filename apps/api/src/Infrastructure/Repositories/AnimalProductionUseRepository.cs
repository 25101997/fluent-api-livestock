using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class AnimalProductionUseRepository : IAnimalProductionUseRepository
    {
        private readonly AppDbContext _context;

        public AnimalProductionUseRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AnimalProductionUse>> GetAllAsync() =>
            await _context.AnimalProductionUses
                .AsNoTracking()
                .ToListAsync();

        public async Task<AnimalProductionUse?> GetByIdAsync(int id) =>
            await _context.AnimalProductionUses
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id);
    }
}
