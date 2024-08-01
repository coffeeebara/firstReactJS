export default function AboutUsLayout({
    children,
}: {
        children: React.ReactNode;
    }) {
    return (
        <div>
            {children}
            &copy; next js goood!
        </div>
    );
}