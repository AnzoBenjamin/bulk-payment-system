import illustration1 from "assets/img/icons/spot-illustrations/50.png";
import illustration2 from "assets/img/icons/spot-illustrations/49.png";
import illustration3 from "assets/img/icons/spot-illustrations/48.png";

export default [
  {
    icon: ["far", "lightbulb"],
    iconText: "PLAN",
    color: "danger",
    title: "Plan & Schedule Payments",
    description:
      "With Almared’s bulk payment system, you can easily plan and schedule payments for hundreds or thousands of recipients, automating the payout process for efficiency and accuracy.",
    image: illustration1,
  },
  {
    icon: ["far", "object-ungroup"],
    iconText: "PROCESS",
    color: "info",
    title: "Secure & Fast Transactions",
    description:
      "Process large volumes of payments securely and rapidly, using Almared’s robust system with built-in encryption and fraud prevention measures, ensuring compliance with global standards.",
    image: illustration2,
    inverse: true,
  },
  {
    icon: ["far", "paper-plane"],
    iconText: "DEPLOY",
    color: "success",
    title: "Review & Confirm",
    description:
      "Review your bulk payment batches, test for accuracy, and confirm transactions with ease. Almared’s system offers detailed reporting and tracking for full transparency on all payouts.",
    image: illustration3,
  },
];
