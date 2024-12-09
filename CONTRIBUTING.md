# Kuidas panustada õppematerjalide repositooriumisse

Tere tulemast! Meil on väga hea meel, et soovid panustada meie õppematerjalide repositooriumisse. Sinu panus aitab meil luua kvaliteetseid õppematerjale, mis aitavad teistel õppida ja areneda.

## 🛠️ Millesse saab panustada?

- **Õppematerjalid**: Lisa uusi peatükke, harjutusi või selgitusi.
- **Koodinäited**: Täienda olemasolevaid näiteid või lisa uusi.
- **Veaparandused**: Paranda kirjavigu, vigast koodi või täpsusta ebamääraseid juhendeid.
- **Dokumentatsioon**: Täienda juhiseid ja parandusi, mis teevad kasutajate elu lihtsamaks.

## 💡 Kuidas alustada?

1. **Forki repositoorium**:

   - Klõpsa nupule "Fork" ja kopeeri see oma GitHubi kontole.

2. **Klooni Fork lokaalselt**:

   ```bash
   git clone https://github.com/<SinuKasutajanimi>/<Repositoorium>.git
   cd <Repositoorium>
   ```

3. **Loo uus haru (Branch)**:
   Loo haru, kus teed oma muudatused:

   ```bash
   git checkout -b minu-panuse-haru
   ```

4. **Tee muudatused**:

   - Redigeeri või loo uusi faile.
   - Lisa oma nimi **Contributors.md** faili:

     1. Ava fail `Contributors.md`.
     2. Lisa oma nimi koos lingiga oma GitHubi profiilile järgmises formaadis:

        ```markdown
        - [Sinu Nimi](https://github.com/SinuGitHubiKasutajanimi)
        ```

     3. Näide:

        ```markdown
        - [Jane Doe](https://github.com/janedoe)
        ```

5. **Testi muudatused**:
   Kui muutsid koodi, veendu, et see töötab.

6. **Lisa kommentaarid ja seleta muudatusi**:
   Selgita tehtud muudatusi commit’i sõnumis:

   ```bash
   git commit -m "Lisatud uus harjutus tingimuslausetele ja nimi Contributors.md faili"
   ```

7. **Pushi muudatused**:
   Laadi oma muudatused oma fork’i:

   ```bash
   git push origin minu-panuse-filiaal
   ```

8. **Ava Pull Request (PR)**:
   - Ava GitHubis oma fork ja klõpsa "Compare & Pull Request".
   - Kirjelda oma muudatusi ja selgita, miks need on kasulikud.

## 🚨 Koodistandardid

Palun järgi järgmisi juhiseid:

- Kasuta järjepidevat formaatimist.
- Kasuta inglisekeelseid muutujaid ja funktsioonide nimesid.
- Väldi väga pikki ridu — murra read loetavuse huvides.

## ✅ Kontrollnimekiri enne Pull Requesti esitamist

- [ ] Olen testinud kõik muudatused.
- [ ] Muudatused on kooskõlas olemasoleva stiiliga.
- [ ] Olen lisanud selgitused, kui on tehtud suuremaid muudatusi.
- [ ] Olen lisanud oma nime **Contributors.md** faili.
- [ ] Pull request sisaldab ainult ühe teema muudatusi.

## 🏆 Mida saad panustamise eest?

- Tänu ja tunnustuse GitHubis!
- Võimaluse õppida ja aidata teisi õppida.
- Osa aktiivsest kogukonnast, mis jagab sinu kirge hariduse ja arenduse vastu.

## 📝 KKK (Korduma Kippuvad Küsimused)

**K: Kas ma saan panustada, kui ma pole kogenud arendaja?**  
V: Absoluutselt! Meil on vaja abi ka kirjavigade parandamisel, juhendite lihtsustamisel ja tõlkimisel.

**K: Kuidas ma saan abi, kui jään hätta?**  
V: Postita küsimus repositooriumi arutelude sektsiooni (**Discussions**) või kirjuta GitHubi probleemina (**Issue**).

---

Aitäh, et aitad muuta õppematerjalid paremaks kõigile! 🎉
