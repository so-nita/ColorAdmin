using Microsoft.AspNetCore.Mvc;

namespace ColorAdmin.Areas.HR.Controllers
{
	[Area("HR")]
	public class EmployeeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
		public IActionResult New()
		{
			return View();
		}
	}
}
