/* eslint import/no-webpack-loader-syntax: off */

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
  CodePane,
  Code,
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
import bagIntro from './images/bag-intro.png';
import bagOne from './images/bag.png';
import bagTwo from './images/bag2.png';
import bagThree from './images/bag3.png';
import DeepBreath from './images/deepbreath.webp';
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
  VarImage,
  CustomParagraph,
  VarTypeBox,
  VarTypeImage,
} from './presentation.styled';

preloader({
  Intro,
  Me,
  LetsRock,
  FirstPage,
  TooMuch,
  EndPartOne,
  IntroTwo,
  EndPartTwo,
  bagIntro,
  bagOne,
  bagTwo,
  bagThree,
  DeepBreath,
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
        <Slide bgImage={Intro} bgDarken={0.6}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Fundamenty JavaScriptu
          </Heading>
          <Text margin="24px 0 0" textColor="tertiary" size={2} bold lineHeight={1.5}>
            <span style={{ display: 'block'}}>Lekcja 1</span>10 dni, które zmieniło świat
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
            Pierwszy kod, czyli jak to wygląda?
          </Heading>
          <CodePane
            theme="dark"
            textSize={36}
            lang="js"
            source={require('!raw-loader!./codes/first.example')}
            margin="64px auto 0 auto"
          />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Proszę pana, ja tu widzę średniki!
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textSize={28} textColor="tertiary" bold>
              Średniki w JavaScripcie kończą instrukcje i są opcjonalne. Jeżeli skrypt ich nie zawiera, to interpreter sam je doda w sposób automatyczny. Dobrą praktyką jest jednak traktowanie ich jako wymóg, dlatego że mechanizm automatycznego dodawania średników może zadziałać niezgodnie z naszymi oczekiwaniami.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Sposoby dodawania JavaScriptu do strony
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                1. Liniowo (inline), za pomocą tagu <Code textColor="secondary" textSize={22}>&lt;script /&gt;</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={36}
                lang="js"
                source={require('!raw-loader!./codes/inline.example')}
                margin="32px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Sposoby dodawania JavaScriptu do strony
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                2. Poprzez plik zewnętrzny, także za pomocą tagu <Code textColor="secondary" textSize={22}>&lt;script /&gt;</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={28}
                lang="js"
                source={'<script src="index.js" type="text/javascript"></script>'}
                margin="24px auto 0 auto"
              />
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Plik <Code textColor="secondary" textSize={22}>index.js</Code>:
              </Text>
              <CodePane
                theme="dark"
                textSize={28}
                lang="js"
                source={require('!raw-loader!./codes/external.example')}
                margin="24px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Gdzie umieszczamy skrypty?
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                1. W sekcji <Code textColor="secondary" textSize={22}>&lt;head /&gt;</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={22}
                lang="jsx"
                source={require('!raw-loader!./codes/place1.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Gdzie umieszczamy skrypty?
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                2. Na końcu sekcji <Code textColor="secondary" textSize={22}>&lt;body /&gt;</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={22}
                lang="jsx"
                source={require('!raw-loader!./codes/place2.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Gdzie umieszczamy skrypty?
          </Heading>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                3. Tak na prawdę gdzie chcemy (o ile wiemy co robimy)
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/place3.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Przecieramy szlaki: Zmienne!
          </Heading>
          <Text textAlign="left" margin="48px 0 0" textSize={28} textColor="tertiary">
            <strong>Zmienna</strong> to konstrukcja programistyczna posiadająca trzy podstawowe atrybuty (źródło: wikipedia): <CustomParagraph>- symboliczną nazwę</CustomParagraph><CustomParagraph>- miejsce przechowywania</CustomParagraph><CustomParagraph>- wartość</CustomParagraph>
          </Text>
          <Appear>
            <div>
              <Text textAlign="left" margin="48px 0 0" textSize={26} textColor="secondary" bold>
                Możemy powiedzieć, że zmienna to "pojemnik" na dane
              </Text>
              <VarImage src={bagIntro} />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Zmienne pod lupą
          </Heading>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Deklaracja zmiennej:
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var1.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Inicjalizacja wartości zmiennej:
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var2.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Deklaracja wraz z inicjalizacją:
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var3.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <Text margin="64px 0 0" textSize={28} textColor="tertiary">
              słówko-kluczowe &lt;var, let, const&gt; nazwa = wartość;
            </Text>
          </Appear>
          <Appear>
            <Text margin="36px 0 0" textSize={28} textColor="secondary">
              UWAGA! Zmienna niezainicjalizowana ma wartość <strong>undefined</strong>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Zasady nazywania zmiennych
          </Heading>
          <ESLayout>
            <List textColor="tertiary">
              <Appear>
                <ListItem textSize={32}>Nazwa zmiennej nie może zaczynać sie od cyfry</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={32}>W nazwie zmiennej nie możemy zawrzeć kropki, spacji, przecinka oraz myślnika</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={32}>Wielkość liter ma znaczenie: zmienna <strong>test</strong> to coś innego niż <strong>Test</strong></ListItem>
              </Appear>
              <Appear>
                <ListItem textSize={32}>Nazwa zmiennej nie może być słowem zarezerwowanym dla języka JS</ListItem>
              </Appear>
            </List>
          </ESLayout>
          <Appear>
            <div>
              <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary" bold>
                Słowa zarezerwowane
              </Text>
              <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary">
              break, case, catch, continue, debugger, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, class, const, enum, export, extends, import, super, implements, interface, let, package, private, protected, public, static, yield, null, true, false, <strong>NaN</strong>, <strong>Infinity</strong>, <strong>undefined</strong>
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Zasady nazywania zmiennych
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Dobrą praktyką jest pisanie nazw zmiennych po angielsku, np. <Code textColor="secondary" textSize={24}>var counter = 0;</Code>
            </Text>
          </Appear>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Powinna opisywać swoje przeznaczenie, np. <Code textColor="secondary" textSize={24}>var x = 0;</Code> średnio nadaje się na zmienną przechowującą sumę dodawania, ale <Code textColor="secondary" textSize={24}>var sum = 0;</Code> już tak
            </Text>
          </Appear>
          <Appear>
            <Text margin="36px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Często stosuje się notacje "wielbłądzią" camelCase, np. <Code textColor="secondary" textSize={24}>var firstStep = 1;</Code>
            </Text>
          </Appear>
          <Appear>
            <Text margin="36px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Niektórzy wykorzystują znak podkreślenia aby przekazać, że zmienna istnieje tylko tymczasowo lub jest zmienną prywatną, np. <Code textColor="secondary" textSize={24} style={{ display: 'block' }}>var _temporaryValue = 'Jestem niepozorną zmienną';</Code>
            </Text>
          </Appear>
          <Appear>
            <Text margin="36px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Znak $ również jest lubiany przez developerów i często określają oni węzły drzewa DOM właśnie z pomocą tego znaku, np. <Code textColor="secondary" textSize={24} style={{ display: 'block' }}>var $body = document.querySelector('body');</Code>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={5} textAlign="left" lineHeight={1} textColor="secondary">
            Sposoby deklaracji zmiennych w JS
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Z użyciem słówka <Code textColor="secondary" textSize={24}>var</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var1.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Z użyciem słówka <Code textColor="secondary" textSize={24}>let</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var4.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Z użyciem słówka <Code textColor="secondary" textSize={24}>const</Code>
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/var5.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Bez słowa kluczowego (zmienna globalna)
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={'zmienna = "Jestem globalna!";'}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Rodzaje zmiennych
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Zmienne lokalne
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/local.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Rodzaje zmiennych
          </Heading>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Zmienne globalne
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/global.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Typy danych
          </Heading>
          <Appear>
            <Text margin="48px 0 0" textSize={28} textColor="tertiary" bold>
              JavaScript jest dynamicznie typowany, ale to nie oznacza, że typy w nim nie istnieją. Każda zmienna do której zostanie przypisana jakaś wartość, będzie miała określony typ, który "zgadnie" interpreter języka.
            </Text>
          </Appear>
          <Appear>
            <div>
              <Text margin="32px 0 0" textSize={28} textColor="tertiary" bold>
                Typ danych określa co dana zmienna może przechowywać i jakie operacje można na niej wykonać (np. dodawanie na liczbach). Typ danych to w uproszczeniu "rodzaj opakowania" na to co znajdzie się w środku.
              </Text>
              <VarTypeBox>
                <VarTypeImage src={bagOne} />
                <VarTypeImage src={bagTwo} />
                <VarTypeImage src={bagThree} />
              </VarTypeBox>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={5} textAlign="left" lineHeight={1} textColor="secondary">
            Typy danych
          </Heading>
          <ESLayout>
            <Appear>
              <div>
                <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                  Typy proste
                </Text>
                <List>
                  <ListItem>Number</ListItem>
                  <ListItem>String</ListItem>
                  <ListItem>Boolean</ListItem>
                  <ListItem>undefined</ListItem>
                  <ListItem>null</ListItem>
                  <ListItem>Symbol</ListItem>
                </List>
              </div>
            </Appear>
            <Appear>
              <div>
                <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                  Typy złożone (referencyjne)
                </Text>
                <List>
                  <ListItem>Object</ListItem>
                  <ListItem>Function</ListItem>
                  <ListItem>Array</ListItem>
                  <ListItem>RegExp</ListItem>
                </List>
              </div>
            </Appear>
          </ESLayout>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textAlign="left" lineHeight={1} textColor="secondary">
            Przykłady zmiennych o różnych typach
          </Heading>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Typu Number
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/vartype1.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Typu String
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/vartype2.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
                Typu Boolean
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/vartype3.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={DeepBreath} />
        <Slide bgColor="primary">
          <Heading size={6} textAlign="left" lineHeight={1} textColor="secondary">
            Obiekt console - przyjaciel programisty!
          </Heading>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              - Pozwala "podglądać" zawartość zmiennych
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              - Wynik "podglądania" jest dostępny w zakładce "Console" w narzędziach developerskich
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              - Radzi sobie nie tylko z typami prostymi, ale także i ze złożonymi jak np. tablice
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              - Udostępnia szerego metod do wyświetlania wartości zmiennych, w tym najpopularniejszą metodę <Code textColor="secondary" textSize={24}>log()</Code>
            </Text>
          </Appear>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={24} textColor="secondary" bold>
                Przykład użycia
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/console.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} lineHeight={1} textAlign="left" textColor="secondary">
            Sprawdzanie typu zmiennej
          </Heading>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Do sprawdzania typu zmiennej służy operator <Code textColor="secondary" textSize={24}>typeof</Code>
            </Text>
          </Appear>
          <Appear>
            <div>
              <Text margin="64px 0 0" textAlign="left" textSize={24} textColor="secondary" bold>
                Przykład użycia
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="js"
                source={require('!raw-loader!./codes/typeof.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textAlign="left" lineHeight={1} textColor="secondary">
            Komentarze, czyli co robił ten kawałek kodu?
          </Heading>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Są to uwagi programistów dotyczące działania poszczególnych kawałków kodu
            </Text>
          </Appear>
          <Appear>
            <div>
              <Text margin="48px 0 0" textAlign="left" textSize={24} textColor="tertiary" bold>
                Komentarz liniowy
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/comments.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text margin="32px 0 0" textAlign="left" textSize={24} textColor="tertiary" bold>
                Komentarz blokowy
              </Text>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/comments2.example')}
                margin="18px auto 0 auto"
              />
            </div>
          </Appear>
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
          <Heading size={6} lineHeight={1} textAlign="left" textColor="secondary">
            Rzutowanie typów - bo miało być dynamicznie!
          </Heading>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="tertiary" bold>
              Rzutowanie jest konwersją jednego typu danych w inny
            </Text>
          </Appear>
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
          <Heading size={5} lineHeight={1} textColor="secondary">
            Podsumowanie wykładu
          </Heading>
          <ESLayout>
            <List>
              <Appear>
                <ListItem>JavaScript - dynamiczny język stron WWW, odpowiada za zachowanie</ListItem>
              </Appear>
              <Appear>
                <ListItem>Zmienne - pojemniki na dane</ListItem>
              </Appear>
              <Appear>
                <ListItem>Typy danych - określają rodzaj zmiennej i decydują o możliwych operacjach</ListItem>
              </Appear>
              <Appear>
                <ListItem>Komentarze - pozwalają na opisanie fragmentów kodu</ListItem>
              </Appear>
              <Appear>
                <ListItem>Instrukcje arytmetyczne i logiczne - pozwalają na wykonywanie operacji na zmiennych</ListItem>
              </Appear>
              <Appear>
                <ListItem>Instrukcje warunkowe if/else oraz switch - sterują przepływem programu</ListItem>
              </Appear>
            </List>
          </ESLayout>
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
            <span style={{ display: 'block'}}>Lekcja 2</span>Pętle, funkcje i trochę o obiektach
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
