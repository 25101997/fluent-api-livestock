namespace Application.DTOs
{
    public class AnimalReproductiveRecordUpdateDto
    {
        public int Id { get; set; }
        public int MotherId { get; set; }
        public int FatherId { get; set; }
        public string Status { get; set; } = string.Empty;
        public int BornMale { get; set; }
        public int BornFemale { get; set; }
        public int AbortedMale { get; set; }
        public int AbortedFemale { get; set; }
        public string? Notes { get; set; }
    }
}
