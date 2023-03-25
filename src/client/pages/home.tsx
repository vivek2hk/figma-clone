import React from 'react';
import { NextPage } from 'next';
import paper from 'paper';

const Home: NextPage<{ data: string }> = (props) => {
  const { data } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      paper.setup(canvasRef.current);
      const path = new paper.Path();
      path.strokeColor = new paper.Color('black');
      const start = new paper.Point(200, 100);
      path.moveTo(start);
      path.lineTo(start.add([500, -50]));
      (paper.view as View).draw();
    }
  }, []);

  return (
    <div>
      <h1>Hello from NextJS! - Home</h1>
      {data}
      <canvas ref={canvasRef} />
    </div>
  );
};

Home.getInitialProps = ({ query }) => {
  return {
    data: `some initial props including query params and controller data: ${JSON.stringify(
      query,
    )}`,
  };
};

export default Home;
