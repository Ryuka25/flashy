<script setup lang="ts">
import { useToast } from "~/components/ui/toast";

const { toast } = useToast();

const isLoading = ref(false);
const form = ref({
  access_key: "58affffd-1130-485e-9514-8a78f9c8a9de",
  subject: "[IMPORTANT] ⚡ Flashy - Contact form submission",
  name: "",
  email: "",
  message: "",
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

const submitForm = async () => {
  try {
    isLoading.value = true;
    const response = await $fetch<any>("https://api.web3forms.com/submit", {
      method: "POST",
      body: form.value,
    });
    console.log(response);
    if (response.success) {
      showSuccessNotification();
    } else {
      showErrorNotification();
    }

    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    console.log(error);
    showErrorNotification();
  } finally {
    isLoading.value = false;
  }
};
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
      <form @submit.prevent="submitForm" class="w-full lg:w-1/2">
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="grid gap-2">
            <Label for="password">Name</Label>
            <Input
              id="password"
              type="text"
              placeholder="Full name"
              v-model="form.name"
            />
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              required
              v-model="form.email"
            />
          </div>
          <div class="grid gap-2 lg:col-span-2">
            <Label for="message">Message</Label>
            <Textarea
              class="min-h-40"
              id="message"
              placeholder="Leave us a message..."
              v-model="form.message"
              required
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
