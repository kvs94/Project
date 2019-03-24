using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Formatters.Internal;
using Test.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace Test.Controllers
{
    [Route("api/templates")]
    public class TemplateController: Controller
    {
        private ApplicationContext db;
        private readonly IMapper _mapper;
        public TemplateController(ApplicationContext context, IMapper mapper)
        {
            db = context;
            _mapper = mapper;

            if (!db.User.Any())
            {
                db.User.Add(new User { LogonName = "admin", Password = "admin", Role = "admin" });
                db.SaveChanges();
            }
            if (!db.Control.Any())
            {
                db.Control.Add(new Control { Id = 1, Name = "Container 1", Type = 1, Value = "test", Parent = null });
                db.Control.Add(new Control { Id = 2, Name = "TextBox 1", Type = 2, Value = "test", Parent = 1 });
                db.Control.Add(new Control { Id = 3, Name = "CheckBox 1", Type = 3, Value = "true", Parent = 1 });
                db.Control.Add(new Control { Id = 4, Name = "ComboBox 1", Type = 4, Value = "2", Parent = 1 });
                db.Control.Add(new Control { Id = 5, Name = "Container 2", Type = 1, Value = "test", Parent = 1 });
                db.Control.Add(new Control { Id = 6, Name = "TextBox 2", Type = 2, Value = "test", Parent = 5 });
                db.Control.Add(new Control { Id = 7, Name = "CheckBox 2", Type = 3, Value = "false", Parent = 5 });
                db.Control.Add(new Control { Id = 8, Name = "ComboBox 2", Type = 4, Value = "2", Parent = 5 });
                db.Control.Add(new Control { Id = 9, Name = "Container 3", Type = 1, Value = "test", Parent = 5 });
                db.Control.Add(new Control { Id = 10, Name = "CheckBox 3", Type = 3, Value = "true", Parent = 9 });
                db.SaveChanges();
            }
            if (!db.Dependency.Any())
            {
                db.Dependency.Add(new Dependency { ControlId = 2, DependencyControlId = 3});
                db.Dependency.Add(new Dependency { ControlId = 2, DependencyControlId = 4 });
                db.Dependency.Add(new Dependency { ControlId = 2, DependencyControlId = 6 });
                db.Dependency.Add(new Dependency { ControlId = 2, DependencyControlId = 7 });
                db.Dependency.Add(new Dependency { ControlId = 3, DependencyControlId = 2 });
                db.Dependency.Add(new Dependency { ControlId = 3, DependencyControlId = 4 });
                db.Dependency.Add(new Dependency { ControlId = 3, DependencyControlId = 7 });
                db.Dependency.Add(new Dependency { ControlId = 7, DependencyControlId = 2 });
                db.Dependency.Add(new Dependency { ControlId = 7, DependencyControlId = 3 });
                db.Dependency.Add(new Dependency { ControlId = 7, DependencyControlId = 4 });
                db.Dependency.Add(new Dependency { ControlId = 7, DependencyControlId = 6 });
                db.Dependency.Add(new Dependency { ControlId = 7, DependencyControlId = 8 });
                db.SaveChanges();
            }
            if (!db.Template.Any())
            {
                db.Template.Add(new Template { Id = 1, Name = "template 1", Container = 1 });
                db.Template.Add(new Template { Id = 2, Name = "template 2", Container = 1 });
                db.Template.Add(new Template { Id = 3, Name = "template 3", Container = 5 });
                db.Template.Add(new Template { Id = 4, Name = "template 4", Container = 9 });
                db.Template.Add(new Template { Id = 5, Name = "template 5", Container = 1 });
                db.SaveChanges();
            }
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<Template> Get()
        {
            return db.Template.ToList();
        }
        
        [Authorize]
        [HttpGet("{id}")]
        public ControlInfo GetTemplateDataById(int id)
        {
            var containerId = db.Template.Where(template => template.Id == id).Select(t => t.Container).FirstOrDefault();
            var control = db.Control.Where(c => c.Id == containerId)
                .Include(c => c.InverseParentNavigation)
                 .ThenInclude(c => c.InverseParentNavigation)
                   .ThenInclude(c => c.InverseParentNavigation)
                .FirstOrDefault();
            var controlInfo = _mapper.Map<Control, ControlInfo>(control);
            return controlInfo;
        }
    }
}
