type Params = {
  title: string;
  children: React.ReactNode;
};

const PageContent = ({ title, children }: Params) => {
  return (
    <div className="text-center">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
