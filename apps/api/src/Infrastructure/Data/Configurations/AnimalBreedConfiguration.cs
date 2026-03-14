using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Configurations
{
    public class AnimalBreedConfiguration : IEntityTypeConfiguration<AnimalBreed>
    {
        public void Configure(EntityTypeBuilder<AnimalBreed> builder)
        {
            builder.ToTable("animal_breed");
            builder.HasKey(b => b.Id);
            builder.Property(b => b.Id).HasColumnName("id");
            builder.Property(b => b.Name)
                   .HasColumnName("name")
                   .HasMaxLength(50)
                   .IsRequired();
        }
    }
}
