import { UseFormReturn } from "react-hook-form";

import {
  useVapiAssistants,
  useVapiPhoneNumbers,
} from "@/modules/plugins/hooks/use-vapi-data";
import {
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

import type { FormSchema } from "../../types";

interface VapiFormFieldsProps {
  form: UseFormReturn<FormSchema>;
}

export const VapiFormFields = ({ form }: VapiFormFieldsProps) => {
  const { data: assistants, isLoading: assistantsLoading } =
    useVapiAssistants();
  const { data: phoneNumbers, isLoading: phoneNumbersLoading } =
    useVapiPhoneNumbers();

  const disabled = form.formState.isSubmitting;

  return (
    <>
      <FormField
        control={form.control}
        name="vapiSettings.assistantId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Voice Assistant</FormLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={assistantsLoading || disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      assistantsLoading
                        ? "Loading assistants..."
                        : "Select an assistant"
                    }
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                {assistants?.map((assistant) => (
                  <SelectItem key={assistant.id} value={assistant.id}>
                    {assistant.name || "Unnamed Assistant"} -{" "}
                    {assistant.model?.model || "Unknown Model"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              The Vapi assistant to use for voice calls
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vapiSettings.phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Phone Number</FormLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={phoneNumbersLoading || disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      phoneNumbersLoading
                        ? "Loading phone numbers..."
                        : "Select a phone number"
                    }
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                {phoneNumbers?.map((phoneNumber) => (
                  <SelectItem
                    key={phoneNumber.id}
                    value={phoneNumber.number || phoneNumber.id}
                  >
                    {phoneNumber.number || "Unknown Number"} -{" "}
                    {phoneNumber.name || "Unnamed Number"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              The phone number to display in the widget
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
