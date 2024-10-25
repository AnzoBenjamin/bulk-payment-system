import EventHeader from "./EventHeader";
import EventUpload from "./EventUpload";
import EventFooter from "./EventFooter";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import EventCustomField from "./EventCustomField";

const CreateEvent = () => {
  const defaultValues = {
    timeZone: "GMT-12:00/Etc/GMT-12",
    selectType: "1",
    selectTopic: "1",
  };
  const submittedValues = {};
  const { register, handleSubmit, setValue, control, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    // ------- Get all object keys form data and set empty values to reset ------------
    const keys = Object.keys(data);
    for (const key of keys) {
      submittedValues[key] = "";
    }
    const allValues = { ...submittedValues, ...defaultValues };
    reset({ ...allValues });
  };
  {
    /*

        <Col xs={12}>
          <EventBanner />
        </Col>

          <EventDetails register={register} setValue={setValue} />
          <EventTicket
            register={register}
            control={control}
            setValue={setValue}
          />
          <EventSchedule register={register} setValue={setValue} />

     */
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="g-3">
        <Col xs={12}>
          <EventHeader />
        </Col>
        <Col xs={12}>
          <EventUpload register={register} setValue={setValue} />
          <EventCustomField
            register={register}
            control={control}
            setValue={setValue}
          />
        </Col>

        <Col>
          <EventFooter />
        </Col>
      </Row>
    </Form>
  );
};

export default CreateEvent;
