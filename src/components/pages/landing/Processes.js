import React from "react";
import processList from "data/feature/processList";
import Section from "components/common/Section";
import Process from "./Process";
import SectionHeader from "./SectionHeader";
import { isIterableArray } from "helpers/utils";

const Processes = () => (
  <Section>
    <SectionHeader
      title="Streamline Your Bulk Payments"
      subtitle="Built for scalability and security, Almared’s bulk payment system allows you to manage large-scale transactions with ease and confidence."
    />
    {isIterableArray(processList) &&
      processList.map((process, index) => (
        <Process key={process.color} isFirst={index === 0} {...process} />
      ))}
  </Section>
);

export default Processes;
