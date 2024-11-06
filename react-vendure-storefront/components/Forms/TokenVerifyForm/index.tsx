import { useMutation } from "@apollo/client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";

import { userTokenVerifyMutation } from "../../../queries/mutations/user-token-verify.mutation";
import { FormFieldError } from "../../FormFieldError";

interface Values {
  token: string;
}

interface Props {
  onSuccess: () => void;
}

export const TokenVerifyForm: React.FC<Props> = ({ onSuccess }) => {
  const [verify, { error: mutationError }] = useMutation(userTokenVerifyMutation);
  const formInitValues: Values = {
    token: "",
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    try {
      const resp = await verify({
        variables: values,
      });
      
      // Перевірка на помилки у відповіді
      if (!resp.errors) {
        resetForm();
        onSuccess();
      }
    } catch (err) {
      console.error(err); // Логування помилки для відладки
    } finally {
      setSubmitting(false); // Завжди скидаємо стан підписки
    }
  };

  return (
    <div>
      <Formik initialValues={formInitValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="token" className="text-sm font-medium">
                Verification Token
              </label>

              <div className="relative mt-1">
                <Field
                  id="token"
                  name="token"
                  placeholder="Enter your verification token"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                />
                <FormFieldError
                  name="token"
                  errors={errors}
                  touched={touched}
                />
                {mutationError && (
                  <div className="mt-2 text-red-600">
                    {mutationError.message} {/* Виводимо помилку з мутації */}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Verify
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
