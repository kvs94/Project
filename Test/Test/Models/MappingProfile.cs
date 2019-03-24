using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace Test.Models
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
              CreateMap<Control, ControlInfo>()
                .ForMember(dest => dest.Children,
                    src => src.MapFrom(c => c.InverseParentNavigation))
                .ForMember(dest => dest.Dependencies,
                    src => src.MapFrom(c => c.DependencyDependencyControl));
        }
    }
}
