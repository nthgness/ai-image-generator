import Layout from "@shared/components/Layout";

import { GenerationProvider } from "@features/image-generation/context/GenerationContext/GenerationProvider";
import { QueryProvider } from "@features/image-generation/context/QueryContext/QueryProvider";
import { ToastProvider } from "@features/image-generation/context/ToastContext/ToastProvider";

import MainContent from "@shared/components/MainContent";

const App = () => {
  return (
    <ToastProvider>
      <QueryProvider>
        <GenerationProvider>
          <Layout>
            <MainContent />
          </Layout>
        </GenerationProvider>
      </QueryProvider>
    </ToastProvider>
  );
};

export default App;
