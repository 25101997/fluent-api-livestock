namespace Application.DTOs
{
    public class AnimalReadDto
    {
        public int Id { get; set; }

        // Relaciones de navegación
        public AnimalOriginReadDto? Origin { get; set; }
        public AnimalStatusReadDto? Status { get; set; }
        public AnimalStageReadDto? Stage { get; set; }
        public AnimalBreedReadDto? BreedB { get; set; }
        public AnimalProductionUseReadDto? ProductionUse { get; set; }
        public AnimalReproductiveRecordReadDto? Litter { get; set; }

        // Atributos descriptivos
        public decimal Weight { get; set; }              // NOT NULL
        public bool IsCastrated { get; set; }            // NOT NULL
        public string? Breed { get; set; }               // NULL permitido
        public string Sex { get; set; } = string.Empty;  // NOT NULL

        // Fechas
        public DateTime BirthDate { get; set; }          // NOT NULL
        public DateTime Created { get; set; }            // NOT NULL
        public DateTime Updated { get; set; }            // NOT NULL
    }
}
