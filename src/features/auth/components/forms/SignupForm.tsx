import { authContent } from '@/features/auth/content/authContent';
import FormLabel from '@/components/ui/FormLabel';
import SelectInput from '@/components/ui/SelectInput';
import TextInput from '@/components/ui/TextInput';
import PasswordInput from '@/components/ui/PasswordInput';
import InlineErrorText from '@/components/ui/InlineErrorText';
import AuthFormHeader from '@/features/auth/components/AuthFormHeader';
import AuthFormFooter from '@/features/auth/components/AuthFormFooter';
import AuthPrimaryButton from '@/features/auth/components/AuthPrimaryButton';

type SignupFormProps = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  isLoading: boolean;
  error?: string;
  success?: string;
  onTitleChange: (value: string) => void;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onSubmit: (data: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }) => void | Promise<void>;
};

const SignupForm = ({
  title,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  role,
  isLoading,
  error,
  success,
  onTitleChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onRoleChange,
  onSubmit,
}: SignupFormProps) => {
  return (
    <>
      {/* review the use of title here */}
      <AuthFormHeader title={authContent.signupLabel} />
      <main className="grid gap-2" onSubmit={(e) => { e.preventDefault(); void onSubmit({ title, firstName, lastName, email, password, confirmPassword, role, }); }}>
        <div className="flex flex-col gap-6 w-full px-2 overflow-hidden">
          <div className="grid gap-4">
            <FormLabel htmlFor="signup-subtitle" className="text-base font-semibold text-black text-[24px] font-spartan">
              {authContent.signupSubtitleLabel}
            </FormLabel>
            <SelectInput id="title" name="title" required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={title} onChange={(e) => onTitleChange(e.target.value)}>
              <option value="mr">{authContent.titleMr}</option>
              <option value="mrs">{authContent.titleMrs}</option>
              <option value="ms">{authContent.titleMs}</option>
            </SelectInput>
            <TextInput id="firstName" name="firstName" type="text" placeholder={authContent.firstNamePlaceholder} required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={firstName} onChange={(e) => onFirstNameChange(e.target.value)} />
            <TextInput id="lastName" name="lastName" type="text" placeholder={authContent.lastNamePlaceholder} required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={lastName} onChange={(e) => onLastNameChange(e.target.value)} />
            <TextInput id="email" type="email" name="email" placeholder={authContent.emailPlaceholder} required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={email} onChange={(e) => onEmailChange(e.target.value)} />
            <PasswordInput id="password" name="password" placeholder={authContent.passwordPlaceholder} required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={password} onChange={(e) => onPasswordChange(e.target.value)} />
            <PasswordInput id="confirmPassword" name="confirmPassword" placeholder={authContent.confirmPasswordPlaceholder} required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={confirmPassword} onChange={(e) => onConfirmPasswordChange(e.target.value)} />
            <SelectInput id="role" name="role" required disabled={isLoading} className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60" value={role} onChange={(e) => onRoleChange(e.target.value)}>
              <option value="user">{authContent.roleUser}</option>
              <option value="admin">{authContent.roleAdmin}</option>
            </SelectInput>
            <AuthPrimaryButton type="submit" disabled={isLoading}>
              {isLoading
                ? authContent.signupButtonLoadingText
                : authContent.signupButtonText}
            </AuthPrimaryButton>
          </div>

          {error && (
            <InlineErrorText className="text-sm text-red-600 text-center">
              {error}
            </InlineErrorText>
          )}
          {success && (
            <InlineErrorText className="text-sm text-green-600 text-center">
              {success}
            </InlineErrorText>
          )}
        </div>
      </main >
      <AuthFormFooter promptText={authContent.alreadyHaveAccountLabel} linkText={authContent.loginLabel} linkHref="/login" />
    </>
  );
};

export default SignupForm;
