using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FirstASPNetApp.Models
{
    public class GradeCalculatorModel
    {
        private const double MIN = 0.0;

        [Required]
        [Range(minimum: MIN, maximum: 10.0)]
        public double assignments { get; set; }
        
        [Range(minimum: MIN, maximum: 10.0)]
        public double groupProject { get; set; }
        
        [Range(minimum: MIN, maximum: 10.0)]
        public double quizzes { get; set; }
        
        [Range(minimum: MIN, maximum: 20.0)]
        public double exams { get; set; }
        
        [Range(minimum: MIN, maximum: 10.0)]
        public double intex { get; set; }
    }
}
