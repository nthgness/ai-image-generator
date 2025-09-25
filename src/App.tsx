import React from "react";
import { Layout } from "./shared";
import { GenerationProvider, QueryProvider, PromptForm, ImageDisplay, ImageHistory } from "./features/image-generation";

const AppContent: React.FC = () => {
  return (
    <Layout>
      <PromptForm />
      <ImageDisplay />
      <ImageHistory />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <GenerationProvider>
      <QueryProvider>
        <AppContent />
      </QueryProvider>
    </GenerationProvider>
  );
};

export default App;
