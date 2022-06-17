import React, { useContext, useRef } from 'react';
import Sticky from 'react-stickynode';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { BiChevronsRight } from 'react-icons/bi';

import Button from '../Button';

import {
  Container,
  Searchbar,
  ThemeSwitch,
  ToggleFloatbox,
} from './styles';

import detailedBlackBrand from '../../img/detailed-black-brand.svg';
import detailedWhiteBrand from '../../img/detailed-white-brand.svg';

interface FloatboxProps {
  contactsContainerHeight: number;
  toggleTheme: () => void;
  setSearch: (query: string) => void;
  floatBoxContainerRef: any;
}

const Floatbox: React.FC<FloatboxProps> = ({
  contactsContainerHeight,
  toggleTheme,
  setSearch,
  floatBoxContainerRef,
}) => {
  const { colors, title } = useContext(ThemeContext);
  const toggleFloatboxRef = useRef<HTMLDivElement>(null);

  function toggleFloatbox() {
    console.log('touched');
    const toggleIcon = toggleFloatboxRef.current;
    const floatBoxContainer = floatBoxContainerRef.current;

    toggleIcon.classList.toggle('active');
    floatBoxContainer.classList.toggle('active');
  }

  return (
    <Sticky
      top={1.8 * 18}
      enabled={
        contactsContainerHeight > 300 &&
        document.documentElement.clientWidth > 535
      }
      bottomBoundary={contactsContainerHeight + 1.8 * 18}
    >
      <Container>
        <ToggleFloatbox
          ref={toggleFloatboxRef}
          onClick={toggleFloatbox}
          className="toggle"
        >
          <BiChevronsRight size={32} />
        </ToggleFloatbox>

        <img
          src={
            title === 'light'
              ? detailedBlackBrand
              : detailedWhiteBrand
          }
        />

        <Searchbar
          placeholder="Pesquisar..."
          onChange={(e) => {
            const query = e.target.value;
            setSearch(query);
          }}
        />
        <Button text="Adicionar" isLink />

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
            activeBoxShadow="0px 0px 1px 3px rgba(0, 0, 0, 0.2)"
          />
        </ThemeSwitch>
      </Container>
    </Sticky>
  );
};

export default Floatbox;
