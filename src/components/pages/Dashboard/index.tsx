import React from "react";
import {
  StyledDashboardContainer,
  StyledDashboardContent,
  StyledDashboardHeader,
} from "./styles";
import Card from "components/common/Card";

const Dashboard = () => {
  const items: { title: string; content: string; footerText: string }[] = [
    {
      title: "Tasks listing",
      content: "Click to see all tasks",
      footerText: "all tasks",
    },
    {
      title: "Favorite list",
      content: "More prioritized tasks! Don't hesitate and finish them",
      footerText: "all tasks",
    },
    {
      title: "Finished tasks",
      content: "Click to see all tasks",
      footerText: "all tasks",
    },
    {
      title: "Archive",
      content: "Click to see all tasks",
      footerText: "all tasks",
    },
  ];

  return (
    <StyledDashboardContainer>
      <StyledDashboardHeader>Task manager</StyledDashboardHeader>
      <StyledDashboardContent>
        {items.map((i, id) => (
          <Card key={id} {...i} />
        ))}
      </StyledDashboardContent>
    </StyledDashboardContainer>
  );
};

export default Dashboard;
