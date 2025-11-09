using Application.DTOs;
using AutoMapper;
using Domain.Entities;

namespace Application.Mapping
{
    public class AnimalReproductiveRecordProfile : Profile
    {
        public AnimalReproductiveRecordProfile()
        {
            CreateMap<AnimalReproductiveRecordCreateDto, AnimalReproductiveRecord>();

            CreateMap<AnimalReproductiveRecordUpdateDto, AnimalReproductiveRecord>();
            
            CreateMap<AnimalReproductiveRecord, AnimalReproductiveRecordReadDto>()
                .ForMember(dest => dest.TotalBorn, opt => opt.MapFrom(src => src.TotalBorn));

                //.ForMember(dest => dest.Mother, opt => opt.MapFrom(src => src.Mother != null ? src.Mother.Breed : "Desconocida"))
                //.ForMember(dest => dest.Father, opt => opt.MapFrom(src => src.Father != null ? src.Father.Breed : "Desconocido"))
        }
    }
}
