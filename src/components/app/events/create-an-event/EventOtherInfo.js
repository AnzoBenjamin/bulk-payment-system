import Flex from "components/common/Flex";
import MultiSelect from "components/common/MultiSelect";
import PropTypes from "prop-types";
import { Button, Card, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const EventOtherInfo = ({ register, control }) => {
  const organizerOptions = [
    { value: "1", label: " Massachusetts Institute of Technology" },
    { value: "2", label: "University of Chicago" },
    { value: "3", label: "GSAS Open Labs At Harvard" },
    { value: "4", label: "California Institute of Technology" },
  ];
  const sponsorsOptions = [
    { value: "1", label: "Microsoft Corporation" },
    { value: "2", label: "Technext Limited" },
    { value: "3", label: " Hewlett-Packard" },
  ];
  const tagOptions = [
    { value: "1", label: "Concert" },
    { value: "2", label: "New Year" },
    { value: "3", label: "Party" },
  ];
  return (
    <Card>
      <Card.Header as="h5">Other Info</Card.Header>
      <Card.Body className="bg-body-tertiary">
        <Form.Group className="mb-3">
          <Flex className="flex-between-center">
            <Form.Label>Organizer</Form.Label>
            <Button size="sm" variant="link" className="p-0">
              Add new
            </Button>
          </Flex>
          <Controller
            name="organizer"
            render={({ ref, field }) => (
              <MultiSelect
                {...field}
                ref={ref}
                closeMenuOnSelect={false}
                isMulti
                options={organizerOptions}
                placeholder="Select organizer..."
              />
            )}
            control={control}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Flex className="flex-between-center">
            <Form.Label>Sponsors</Form.Label>
            <Button size="sm" className="p-0" variant="link">
              Add new
            </Button>
          </Flex>
          <Controller
            name="sponsors"
            render={({ ref, field }) => (
              <MultiSelect
                ref={ref}
                {...field}
                closeMenuOnSelect={false}
                isMulti
                options={sponsorsOptions}
                placeholder="Select sponsors..."
              />
            )}
            control={control}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Type</Form.Label>
          <Form.Select {...register(`selectType`)}>
            <option value="1">Select event type...</option>
            <option value="2">Class, Training, or Workshop</option>
            <option value="3">Concert or Performance</option>
            <option value="4">Conference</option>
            <option value="5">Convention</option>
            <option value="6">Dinner or Gala</option>
            <option value="7">Festival or Fair</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Topic</Form.Label>
          <Form.Select {...register(`selectTopic`)}>
            <option value="1">Select a topic</option>
            <option>Auto, Boat &amp; Air</option>
            <option>Business &amp; Professional</option>
            <option>Charity &amp; Causes</option>
            <option>Community &amp; Culture</option>
            <option>Family &amp; Education</option>
            <option>Fashion &amp; Beauty</option>
            <option>Film, Media &amp; Entertainment</option>
            <option>Food &amp; Drink</option>
            <option>Government &amp; Politics</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Flex alignItems="center" justifyContent="between">
            <Form.Label>Tags</Form.Label>
            <Button size="sm" variant="link" className="p-0">
              Add new
            </Button>
          </Flex>
          <Controller
            name="tags"
            render={({ field, ref }) => (
              <MultiSelect
                {...field}
                ref={ref}
                closeMenuOnSelect={false}
                isMulti
                options={tagOptions}
                placeholder="Select tags..."
              />
            )}
            control={control}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};
EventOtherInfo.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
};

export default EventOtherInfo;
