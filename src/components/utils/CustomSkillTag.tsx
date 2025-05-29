import { Tag } from "@chakra-ui/react";
import React from "react";

export default function CustomSkillTag({ skill }: { skill: string }) {
  return (
    <Tag
      px={2}
      fontSize="sm"
      bg="rgba(43, 43, 44)"
      color={"#D0D0D0"}
      borderWidth={1}
      borderColor={"#383838"}
      transitionDuration={"400ms"}
      _hover={{ backgroundColor: "#1e1e1e" }}
    >
      {" "}
      {skill}
    </Tag>
  );
}
