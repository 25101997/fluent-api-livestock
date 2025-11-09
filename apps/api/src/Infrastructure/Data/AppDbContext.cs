using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Animal> Animals => Set<Animal>();
        public DbSet<AnimalOrigin> AnimalOrigins => Set<AnimalOrigin>();
        public DbSet<AnimalStatus> AnimalStatuses => Set<AnimalStatus>();
        public DbSet<AnimalStage> AnimalStages => Set<AnimalStage>();
        public DbSet<AnimalReproductiveRecord> AnimalReproductiveRecords => Set<AnimalReproductiveRecord>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        }
    }
}
