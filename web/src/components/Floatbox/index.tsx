import React, { useContext } from 'react';
import Sticky from 'react-stickynode';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import Button from '../Button';

import { Container, Searchbar, ThemeSwitch } from './styles';

interface FloatboxProps {
  contactsContainerHeight: number;
  toggleTheme: () => void;
  setSearch: (query: string) => void;
}

const Floatbox: React.FC<FloatboxProps> = ({
  contactsContainerHeight,
  toggleTheme,
  setSearch,
}) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Sticky
      top={1.8 * 18}
      enabled={contactsContainerHeight > 300}
      bottomBoundary={contactsContainerHeight + 1.8 * 18}>
      <Container>
        <span>Esfera Software</span>
        <h1>Challenge</h1>

        <Searchbar
          placeholder='Pesquisar...'
          onChange={e => {
            const query = e.target.value;
            setSearch(query);
          }}
        />
        <Button text='Adicionar' isLink />

        <ThemeSwitch>
          <span>Dark mode</span>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={16}
            width={40}
            handleDiameter={20}
            offColor={colors.background}
            onColor={colors.secondary}
            onHandleColor={colors.primary}
            offHandleColor={colors.primary}
            activeBoxShadow='0px 0px 1px 3px rgba(0, 0, 0, 0.2)'
          />
        </ThemeSwitch>
      </Container>
    </Sticky>
  );
};

export default Floatbox;
