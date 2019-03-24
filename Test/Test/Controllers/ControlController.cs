using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Test.Controllers
{
    [Route("api/controls")]
    public class ControlController: Controller
    {
        private ApplicationContext db;

        public ControlController(ApplicationContext context)
        {
            db = context;
        }

        [Authorize]
        [HttpGet("{id}")]
        public Control Get(int id)
        {
            return db.Control.FirstOrDefault(x => x.Id == id);
        }

        [Authorize]
        [HttpGet("{id}/child-controls")]
        public IEnumerable<Control> GetContnrols(int id)
        {
            return db.Control.Where(c => c.Id == id).SelectMany(c => c.InverseParentNavigation);
        }

        [Authorize]
        [HttpGet("{id}/dependencies")]
        public IEnumerable<int> GetDependencies(int id)
        {
            return db.Dependency.Where(d => d.ControlId == id).Select(d => d.DependencyControlId); 
        }
    }
}
