import { Col, Row } from "react-bootstrap";
import LinePayment from "./line-payment/LinePayment";
import {
  payment,
  activeUser,
  transactionSummary,
  grossRevenue,
  candleChartData,
} from "data/dashboard/saas";
import SaasActiveUser from "./SaasActiveUser";
import SaasRevenue from "./SaasRevenue";
import SaasConversion from "./SaasConversion";
import DepositeStatus from "./DepositeStatus";
import StatisticsCards from "./stats-cards/StatisticsCards";
import { users } from "data/dashboard/default";
import ActiveUsers from "../default/ActiveUsers";

import TransactionSummary from "./TransactionSummary";
import GrossRevenue from "./gross-revenue/GrossRevenue";
import CandleChart from "./candle-chart/CandleChart";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Saas = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Row className="g-3">
        <Col xxl={9} className="d-flex align-items-center justify-content-between">
          <h1>Welcome</h1>
          <p className={"align-self-center"}>{user.username}</p>
        </Col>
        <Col xxl={9}>
          <LinePayment data={payment} />
        </Col>
        <Col>
          <Row className="g-3">
            <Col md={4} xxl={12}>
              <SaasActiveUser data={activeUser} />
            </Col>
            <Col md={4} xxl={12}>
              <SaasRevenue />
            </Col>
            <Col md={4} xxl={12}>
              <SaasConversion />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={9}>
          <DepositeStatus />
          <StatisticsCards />
          <Row className="g-3">
            <Col xs={12}>
              <CandleChart data={candleChartData} />
            </Col>
            <Col lg={4}>
              <ActiveUsers users={users} end={7} />
            </Col>
            <Col lg={8}>
              <GrossRevenue data={grossRevenue} />
            </Col>
          </Row>
        </Col>
      </Row>
      <TransactionSummary data={transactionSummary} />
    </>
  );
};

export default Saas;
