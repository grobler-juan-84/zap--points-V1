import InlineErrorText from '@/components/ui/InlineErrorText';

type AuthFormFeedbackProps = {
    error?: string;
    success?: string;
};

const AuthFormFeedback = ({ error, success }: AuthFormFeedbackProps) => {
    return (
        <>
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
        </>
    );
};

export default AuthFormFeedback;