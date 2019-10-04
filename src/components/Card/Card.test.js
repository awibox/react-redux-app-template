import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

const testClassName = 'test-class';

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Card>
      <div>
        <div>
          Test Card
        </div>
      </div>
    </Card>);
    expect(component).toMatchSnapshot();
  });
  it('should have className', () => {
    const component = shallow(<Card className={testClassName}>Test button</Card>);
    expect(component.find('.' + testClassName)).toExist();
  });
});
