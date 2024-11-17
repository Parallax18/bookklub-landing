import React from "react";
import WaitlistSectionRing from "../svg/waitlist-section-ring";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const WaitlistSection = () => {
  const form = useForm();
  return (
    <section>
      <div>
        <span className="font-sans text-[3.5rem] leading-[4.2rem] tracking-tight font-[500] ">
          Books and...
        </span>
        <span className="font-cursive text-primary-500 text-[5rem] tracking-tight leading-[4.2rem] font-[400] block">
          more
        </span>
      </div>
      <div className="bg-neutral-snow rounded-[1rem] px-[3.375rem] py-[3.375rem] mt-[1.5rem] ">
        <div className="flex justify-between items-center w-full mb-[5.5rem]">
          <div>
            <p className="font-sans font-[600] tracking-tight leading-[3.6rem] text-[3rem]  ">
              You are not just on our list{" "}
              <span className="font-cursive text-primary-500 text-[4.5rem] leading-[3.6rem] font-[400]">
                waiting
              </span>
              {"  "}
              but, <br />
              we have also been{" "}
              <span className="font-cursive text-secondary-500 text-[4.5rem] leading-[3.6rem] font-[400]">
                waiting
              </span>{" "}
              for you
            </p>
          </div>
          <WaitlistSectionRing />
        </div>
        <div>
          <FormProvider {...form}>
            <form
              id="waitlist-form"
              className="flex items-end gap-[1rem]"
              onSubmit={form.handleSubmit(() => {})}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-[500] text-primary-900  text-[0.875rem] leading-[1.26875rem] font-sans mb-0 py-0">
                      Enter you email
                    </FormLabel>
                    <FormControl className="mt-0 py-0">
                      <Input
                        className="rounded-[2.5rem] w-[24.75rem] h-[3.5rem] shadow-none mt-0"
                        placeholder="mail@xyz.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="font-[700] text-[1.125rem] leading-[1.63125rem] font-sans h-[3.5rem] w-[11.75rem] "
              >
                Join the waitlist
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
