import JobsCard from "./JobsCard";

export default function JobOpenings() {
  const greenPackagingJobs = [
    "Packaging Engineers",
    "Quality Control Specialists",
    "Sales Representatives",
    "Graphic Designers",
  ];
  const greenEcoplastJobs = [
    "Mechanical Engineers",
    "Chemical Engineers",
    "Operations Managers",
    "Waste Management Specialists",
  ];
  const firstAluminiumJobs = [
    "Metallurgical Engineers",
    "Production Supervisors",
    "Quality Assurance Technicians",
    "Sales and Marketing Professionals",
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm md:text-xl text-center font-semibold text-[#016E97] font-[poppins]">
        Our Current Openings
      </h2>
      <p className="text-xs md:text-sm font-[poppins] text-[#030B1E] lg:px-[100px]">
        We are constantly seeking talented and passionate individuals to join
        our team across various disciplines. Explore our current openings and
        discover how your skills and experience can contribute to our mission
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <JobsCard title="Reinnova Green Packaging" items={greenPackagingJobs} />
        <JobsCard title="Reinnova Green Ecoplast" items={greenEcoplastJobs} />
        <JobsCard title="First Aluminium Nigeria Limited" items={firstAluminiumJobs} />
      </div>
    </div>
  );
}
