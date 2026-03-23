namespace Application.DTOs
{
    public class AnimalCreateDto
    {
        // Llaves foráneas obligatorias
        public int OriginId { get; set; }
        public int StatusId { get; set; }
        public int StageId { get; set; }

        // Llaves foráneas opcionales
        public int? BreedId { get; set; }
        public int? ProductionUseId { get; set; }
        public int? LitterId { get; set; }

        // Atributos descriptivos
        public string Sex { get; set; } = string.Empty;   // NOT NULL
        public string? Breed { get; set; }                // NULL permitido
        public decimal Weight { get; set; }               // NOT NULL
        public bool IsCastrated { get; set; }             // NOT NULL

        // Fechas
        public DateTime BirthDate { get; set; }           // NOT NULL
    }
}


