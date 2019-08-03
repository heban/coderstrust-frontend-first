// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Appear,
  Link,
  List,
  ListItem,
  S,
  BlockQuote,
  Quote,
  Cite,
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import Intro from './images/js-intro.jpg';
import Me from './images/pablo.jpg';
import LetsRock from './images/letsrock.gif';
import FirstPage from './images/first-page.jpg';
import TooMuch from './images/es.gif';
import EndPartOne from './images/more.gif';
import IntroTwo from './images/js-intro2.jpg';
import EndPartTwo from './images/tony.gif';

// Styles
import {
  AuthorLayout,
  AuthorImage,
  Word,
  FirstPageImage,
  ESLayout,
  RoleLayout,
  RoleCircle,
  KeywordCloud,
} from './presentation.styled';

preloader({
  LetsRock,
  TooMuch,
  EndPartOne,
  EndPartTwo,
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#222',
    secondary: '#ffec8b',
    tertiary: '#CC5E84',
    quaternary: '#fff',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1200}
      >
        <Slide bgImage={Intro} bgDarken={0.8}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Fundamenty JavaScriptu
          </Heading>
          <Text margin="24px 0 0" textColor="tertiary" size={2} bold lineHeight={1.5}>
           <div>Lekcja 1</div>10 dni, które zmieniło świat
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={4} lineHeight={1} textColor="secondary">
            Trochę o mnie
          </Heading>
          <AuthorLayout>
            <AuthorImage src={Me} />
            <List>
              <ListItem>Front-end developer już od 8 lat</ListItem>
              <ListItem>Związany z IT od czasów podstawówki</ListItem>
              <ListItem>Lubi piwa craftowe (tak to się pisze?)</ListItem>
              <ListItem>I często marnuje czas przy konsoli</ListItem>
              <Appear>
                <ListItem>A żona patrzy i kręci głową...</ListItem>
              </Appear>
            </List>
          </AuthorLayout>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" size={2} bold>
              Najważniejsze: też jestem człowiekiem!
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={4} lineHeight={1} textColor="secondary">
            I trochę o samym kursie
          </Heading>
          <List>
            <ListItem><Word>Cztery</Word> tygodnie zabawy z JavaScriptem :)</ListItem>
            <ListItem>Zajęcia <Word>dwa</Word> razy w tygodniu: we wtorki i czwartki</ListItem>
            <ListItem><Word>Dwa</Word> projekty do wykonania w trakcie kursu</ListItem>
            <ListItem><Word>Niezliczona</Word> ilość <S type="strikethrough">nerwów</S> radości!</ListItem>
          </List>
          <Appear>
            <Text margin="64px 0 0" textColor="tertiary" size={2} bold>
              Mentorzy są dla Was, nie bójcie się nas męczyć na konsultacjach ;)
            </Text>
          </Appear>
        </Slide>
        <Slide bgImage={LetsRock} bgDarken={0.2}>
          <Heading size={3} lineHeight={1} fit textColor="secondary">
            No to jedziemy!
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Dawno dawno temu... w latach 90-tych
          </Heading>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" textAlign="left">
              Strony służyły jedynie wymianie informacji na odległość
            </Text>
          </Appear>
          <Appear>
            <Text margin="16px 0 0" textColor="tertiary" textAlign="left">
              I ciężko je było nazwać ładnymi...
            </Text>
          </Appear>
          <Appear>
            <FirstPageImage src={FirstPage} />
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="primary">
            1995 przyniósł rewolucję!
          </Heading>
          <Appear>
            <List>
              <ListItem textColor="primary">Brendan Eich tworzy w 10 dni język <Word>JavaScript</Word></ListItem>
              <ListItem textColor="primary">A właściwie to język Mocha, bo tak na początku się nazywał</ListItem>
              <ListItem textColor="primary">Inspiruje się takimi językami jak Lisp, Scheme oraz Self</ListItem>
              <ListItem textColor="primary">Język ten zaczął swoją przygodę od Netscape Navigatora</ListItem>
              <ListItem textColor="primary">I współcześnie jest praktycznie wszędzie</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={4} lineHeight={1} textColor="secondary">
            Hej, a co to ten ECMA...Script?
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textColor="tertiary" fit bold>
              ECMAScript to specyfikacja opisująca obiektowy język ogólnego przeznaczenia
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" fit bold>
              Można powiedzieć, że jest to "metajęzyk" będący standardem dla innych języków
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" fit bold>
              I nie da się w nim nic napisać, ponieważ opisuje on tylko składnie!
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading fit size={4} lineHeight={1} textColor="secondary">
            Implementacje ECMAScript
          </Heading>
          <Appear>
            <List>
              <ListItem>JavaScript</ListItem>
              <ListItem>JScript</ListItem>
              <ListItem>ActionScript</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Wersje ECMAScript
          </Heading>
          <ESLayout>
            <Appear>
              <List>
                <ListItem>Przed 2000 - ES1, ES2, <Word>ES3</Word></ListItem>
                <ListItem>ES4 - porzucone</ListItem>
                <ListItem>ES5/<Word>5.1</Word> - 2009/2011</ListItem>
                <ListItem><Word>ES6</Word> - ES2015</ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem>ES7 - ES2016</ListItem>
                <ListItem>ES8 - ES2017</ListItem>
                <ListItem>ES9 - ES2018</ListItem>
                <ListItem>ES10 - ES2019</ListItem>
              </List>
            </Appear>
          </ESLayout>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" bold>
              ES.Next / ES Harmony
            </Text>
          </Appear>
        </Slide>
        <Slide bgImage={TooMuch} bgDarken={0.1} />
        <Slide bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="secondary">
            Rola JavaScriptu
          </Heading>
          <RoleLayout>
            <Appear>
              <div>
                <RoleCircle>
                  <Text margin="0 0 32px 0" textSize={52} textColor="primary" bold>
                    HTML
                  </Text>
                  <Text textSize={32} textColor="tertiary" bold>
                    Struktura
                  </Text>
                </RoleCircle>
              </div>
            </Appear>
            <Appear>
              <div>
                <RoleCircle>
                  <Text margin="0 0 32px 0" textSize={52} textColor="primary" bold>
                    CSS
                  </Text>
                  <Text textSize={32} textColor="tertiary" bold>
                    Wygląd
                  </Text>
                </RoleCircle>
              </div>
            </Appear>
            <Appear>
              <div>
                <RoleCircle>
                  <Text margin="0 0 32px 0" textSize={52} textColor="primary" bold>
                    JS
                  </Text>
                  <Text textSize={32} textColor="tertiary" bold>
                    Zachowanie
                  </Text>
                </RoleCircle>
              </div>
            </Appear>
          </RoleLayout>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Gdzie znajdziemy JavaScript?
          </Heading>
          <ESLayout>
            <List>
              <Appear>
                <ListItem>W przeglądarce</ListItem>
              </Appear>
              <Appear>
                <ListItem>W urządzeniach mobilnych - <Word>Phonegap, React Native</Word></ListItem>
              </Appear>
              <Appear>
                <ListItem>W aplikacjach desktopowych - <Word>Electron</Word></ListItem>
              </Appear>
              <Appear>
                <ListItem>Na serwerze - <Word>Node.js</Word></ListItem>
              </Appear>
              <Appear>
                <ListItem>W urządzeniach IoT - <Word>Noduino, Johnny-Five</Word></ListItem>
              </Appear>
              <Appear>
                <ListItem>W telewizorach - <Word>WebOS, Tizen, Firefox OS</Word></ListItem>
              </Appear>
            </List>
          </ESLayout>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="secondary">
            JavaScript i te wszystkie, dziwne słowa
          </Heading>
          <KeywordCloud>
            <Appear>
              <span>Interpretowany</span>
            </Appear>
            <Appear>
              <span>Dynamiczny</span>
            </Appear>
            <Appear>
              <span>Client-Side</span>
            </Appear>
            <Appear>
              <span>Server-Side</span>
            </Appear>
            <Appear>
              <span>Vanilla JS</span>
            </Appear>
            <Appear>
              <span>Prototypy</span>
            </Appear>
            <Appear>
              <span>Framework</span>
            </Appear>
            <Appear>
              <span>Abstrakcja</span>
            </Appear>
            <Appear>
              <span>Debugger</span>
            </Appear>
            <Appear>
              <span>DOM</span>
            </Appear>
            <Appear>
              <span>Asynchroniczny</span>
            </Appear>
            <Appear>
              <span>AJAX</span>
            </Appear>
          </KeywordCloud>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="secondary">
            Pierwszy kod, czyli czym to się je?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Sposoby dodawania JavaScriptu do strony
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Przecieramy szlaki: Zmienne!
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Sposoby deklaracji zmiennych w JS
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Typy zmiennych
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Proszę pana, ja tu widzę średniki!
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Rzutowanie typów - bo miało być dynamicznie!
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Komentarze, niech wszyscy wiedzą (w tym ja)!
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Operatory arytmetyczne
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Operatory przypisania
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Operatory logiczne
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Instrukcja warunkowa if/else
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Instrukcja Switch
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Podsumowanie wykładu
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1}>
            Prawo Atwooda
          </Heading>
          <BlockQuote>
            <Quote>Any application that can be written in JavaScript will eventually be written in JavaScript</Quote>
            <Cite>Jeff Atwood</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgImage={EndPartOne} bgDarken={0.1} />
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            To była część pierwsza!
          </Heading>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" size={1} fit bold>
              Czas na Q&A!
            </Text>
          </Appear>
          <Appear>
            <div style={{ margin: '64px 0 0' }}>
              <Link href="https://github.com/heban/coderstrust-frontend-first" textColor="tertiary" size={1} fit bold target="_blank">
                https://github.com/heban/coderstrust-frontend-first
              </Link>
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={IntroTwo} bgDarken={0.75}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Fundamenty JavaScriptu
          </Heading>
          <Text margin="24px 0 0" textColor="tertiary" size={2} bold lineHeight={1.5}>
           <div>Lekcja 2</div>Pętle, funkcje i obiekty
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Szybka powtórka
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Tablice
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Pętle
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Funkcja, najpiękniejsza część języka
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Przekazywanie przez wartość i referencje
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Metody tablic... poczekaj, jakie metody?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Obiektowość - a coś więcej na ten temat?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Prototypy
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Obiekt globalny
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Pozostałe obiekty wbudowane
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Podsumowanie wykładu
          </Heading>
        </Slide>
        <Slide bgImage={EndPartTwo} bgDarken={0.8}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            JavaScript to ogromne możliwości!
          </Heading>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" size={1} fit bold>
              Wykorzystaj je by zrobić coś fajnego!
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Koniec części drugiej :(
          </Heading>
          <Appear>
            <Text margin="32px 0 0" textColor="tertiary" size={1} fit bold>
              Czas na Q&A!
            </Text>
          </Appear>
          <Appear>
            <div style={{ margin: '64px 0 0' }}>
              <Link href="https://github.com/heban/coderstrust-frontend-first" textColor="tertiary" size={1} fit bold target="_blank">
                https://github.com/heban/coderstrust-frontend-first
              </Link>
            </div>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
