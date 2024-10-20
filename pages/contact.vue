<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";
import { useToast } from "~/components/ui/toast";

const { toast } = useToast();

const isLoading = ref(false);
const token = ref("");

const contactFormSchema = toTypedSchema(
  z.object({
    access_key: z.string().default("58affffd-1130-485e-9514-8a78f9c8a9de"),
    subject: z
      .string()
      .default("[IMPORTANT] ⚡ Flashy - Contact form submission"),
    name: z.string().min(1, { message: "This is required" }).min(3),
    botcheck: z.literal<boolean>(false).default(true),
    email: z
      .string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" }),
    message: z
      .string()
      .min(1, { message: "This is required" })
      .min(10, { message: "Provide more details please" }),
  }),
);

const { handleSubmit, resetForm, values, setFieldValue } = useForm({
  validationSchema: contactFormSchema,
});

const showErrorNotification = () => {
  toast({
    title: "🥺 Oh no, something bad happened",
    description:
      "Actually, we are unable to send your message right now. Please try again later.",
    variant: "destructive",
  });
};
const showSuccessNotification = () => {
  toast({
    title: "📧 Yup, your message has been sent!",
    description: "Your message has been sent and we will get back to you ASAP.",
  });
};

const submitForm = handleSubmit(async (values) => {
  try {
    isLoading.value = true;
    const response = await $fetch<any>("https://api.web3forms.com/submit", {
      method: "POST",
      body: values,
    });
    if (response.success) {
      showSuccessNotification();
    } else {
      showErrorNotification();
    }

    // Reset form after submission
    resetForm();
  } catch (error) {
    console.log(error);
    showErrorNotification();
  } finally {
    isLoading.value = false;
  }
});

watch(token, (value) => {
  setFieldValue("botcheck", !Boolean(value));
});
</script>

<template>
  <div class="flex-1">
    <div class="lg:text-center">
      <h1 class="text-5xl font-bold lg:text-7xl">Contact us</h1>
      <p class="my-8">
        Got any suggestion or need help? Send us a friendly message for free 🎉
      </p>
    </div>
    <div class="mt-16 flex justify-around gap-4">
      <form
        @submit="submitForm"
        class="w-full lg:w-1/2"
        :validation-schema="contactFormSchema"
      >
        <div class="grid gap-4 lg:grid-cols-2">
          <FormField name="name" v-slot="{ componentField }" class="grid gap-2">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="text"
                  placeholder="Full name"
                  :="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="email" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="text"
                  placeholder="you@company.com"
                  :="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="message" v-slot="{ componentField }">
            <FormItem class="lg:col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  class="min-h-40"
                  id="message"
                  placeholder="Leave us a message..."
                  :="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="grid gap-2 lg:col-span-2">
            <NuxtTurnstile
              v-model="token"
              :options="{ size: 'flexible', appearance: 'interaction-only' }"
            />
          </div>
        </div>
        <Button type="submit" class="mt-8 w-full" :disabled="isLoading">
          Send message
        </Button>
      </form>
      <div class="hidden lg:flex">
        <div>
          <div>
            <h2 class="text-lg font-bold">Chat with us</h2>
            <p class="mt-4">Speak to me via a live chat.</p>
          </div>
          <div class="mt-4 grid gap-2">
            <NuxtLink
              class="flex items-center gap-2 font-bold underline"
              to="mailto:contact.lovanirina@gmail.com"
            >
              <Icon name="lucide:send" class="h-4 w-4" /> Shoot us an email
            </NuxtLink>
            <a
              class="flex items-center gap-2 font-bold underline"
              href="https://x.com/lovanirina_r"
            >
              <Icon name="simple-icons:x" class="h-4 w-4" /> Message us on X
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
