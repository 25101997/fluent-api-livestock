using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AnimalProductionUseConfiguration : IEntityTypeConfiguration<AnimalProductionUse>
    {
        public void Configure(EntityTypeBuilder<AnimalProductionUse> builder)
        {
            builder.ToTable("animal_production_use");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).HasColumnName("id");
            builder.Property(p => p.Name)
                   .HasColumnName("name")
                   .HasMaxLength(50)
                   .IsRequired();
        }
    }
}
