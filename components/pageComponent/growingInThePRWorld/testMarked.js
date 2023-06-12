import {  } from 'marked';
import React, { useEffect, useState } from 'react';
const TestMarked = () => {
  const [renderedContent, setRenderedContent] = useState('');
  useEffect(() => {
    setRenderedContent(marked(""));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    </div>
  );
};

export default TestMarked;
