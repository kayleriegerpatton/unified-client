import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { JobCard } from "../components/JobCard";
import { JOBS } from "../queries";

export const ViewJobsPage = () => {
  const { data, loading, error } = useQuery(JOBS);
  console.log(data);
  const navigate = useNavigate();

  if (error) {
    //   TODO: navigate to 404 page if error
    navigate("/error", { replace: true });
  }

  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
    },
  };

  return (
    <>
      {/* <NavBar /> */}
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        align="center"
        sx={styles.header}
      >
        Open Jobs
      </Typography>

      {data &&
        data.jobs.map((job) => (
          <JobCard
            title={job.title}
            description={job.description}
            company={job.company}
            url={job.url}
            salary={job.salary}
            date={new Date(job.closingDate)}
            key={job.id}
          />
        ))}
    </>
  );
};
