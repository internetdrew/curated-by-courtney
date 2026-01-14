import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "./ui/field";
import { Input } from "./ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";

const inputThresholds = {
  name: { min: 1, max: 50 },
  eventType: { min: 1, max: 50 },
  message: { min: 10, max: 1500 },
};

const formSchema = z.object({
  name: z
    .string()
    .min(inputThresholds.name.min, "Please enter your name.")
    .max(inputThresholds.name.max, "Name must be at most 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  eventType: z
    .string()
    .min(
      inputThresholds.eventType.min,
      "Please tell me what type of event this is.",
    )
    .max(
      inputThresholds.eventType.max,
      `Event type must be at most ${inputThresholds.eventType.max} characters long.`,
    ),
  message: z
    .string()
    .min(inputThresholds.message.min, "Message must be at least 10 characters.")
    .max(
      inputThresholds.message.max,
      `Message must be at most ${inputThresholds.message.max} characters long.`,
    ),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      eventType: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast.success("Form submitted successfully!");
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Let's Chat</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">What's your name?</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Jane Smith"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">
                    What's your email address?
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="jane@example.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="eventType"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="eventType">
                    What kind of gathering are you planning?
                  </FieldLabel>
                  <Input
                    {...field}
                    id="eventType"
                    aria-invalid={fieldState.invalid}
                    placeholder="Birthday party, dinner, team event..."
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    Tell me about your event!
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="message"
                      placeholder="Guest count, date, location, any ideas you have in mind..."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText
                        className={`tabular-nums text-xs ml-auto ${field.value.length > inputThresholds.message.max ? "text-red-600 dark:text-red-400" : ""}`}
                      >
                        {inputThresholds.message.max - field.value.length}{" "}
                        characters{" "}
                        {field.value.length > inputThresholds.message.max
                          ? "over the limit"
                          : "remaining"}
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include any details or questions you have about your event.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="form-rhf-demo" className="ml-auto">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
