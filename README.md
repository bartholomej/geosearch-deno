![](https://github.com/COEXCZ/geosearch/workflows/Build%20&%20Run%20tests%20&%20Publish/badge.svg)

# GeoSearch CLI for Deno

> Simple Deno CLI library to find places all around the world
>
> _Datasource: Mapy.cz Suggest API_

## Install

Not needed. It's [Deno](https://deno.land/) :)

## Usage

### Help

```console
deno run https://raw.githubusercontent.com/bartholomej/geosearch-deno/master/mod.ts
```

Parameters:

```bash
--help
```

### City, town, village

Let's find all _Springfields_ in the World

```console
deno run --allow-net https://raw.githubusercontent.com/bartholomej/geosearch-deno/master/mod.ts --phrase Springfield --scope muni
```

Parameters:

```bash
--phrase Springfield --scope muni
```

### Places start with

Let's find cities or villages start with _Ber_ in _Germany_

```console
deno run --allow-net https://raw.githubusercontent.com/bartholomej/geosearch-deno/master/mod.ts --phrase Ber --scope muni --country de
```

Parameters:

```console
 --phrase Ber --scope muni --country de
```

### Public transport

Let's find position of public transport station in the Czech Republic

```console
deno run --allow-net https://raw.githubusercontent.com/bartholomej/geosearch-deno/master/mod.ts --phrase kokořín --scope pubt --country cz
```

Parameters:

```bash
 --phrase kokořín --scope pubt --country cz
```

### More!

Let's try to find **rivers, lakes, mountains, streets, national parks, areas, tourist attractions**, ..., everything what awesome [Mapy.cz Suggest API](https://api.mapy.cz/view?page=suggestadv) can do.

## Results (example)

```javascript
[
  {
    category: 'municipality_cz',
    highlight: [],
    sentence: '',
    userData: {
      bbox: [Array],
      country: 'Česko',
      district: 'Hlavní město Praha',
      elasticWeight: 0,
      evidenceNumber: '',
      hasAddress: true,
      highlight: [Array],
      highlightSecond: [Array],
      houseNumber: '',
      iconType: 'geo',
      id: 3468,
      img: '',
      importance: 0.763394835100681,
      latitude: 50.0835493857,
      longitude: 14.4341412988,
      mmid: '',
      mmsource: '',
      mmtype: '',
      muniId: '3468',
      municipality: 'Praha',
      nuts: 'CZ0100',
      poiType: '',
      poiTypeId: 0,
      popularity: 1,
      premiseIds: [],
      quarter: '',
      region: 'Hlavní město Praha',
      source: 'muni',
      street: '',
      streetNumber: '',
      suggestFirstRow: 'Praha',
      suggestSecondRow: 'okres Hlavní město Praha, kraj Hlavní město Praha, Česko',
      suggestThirdRow: 'Hlavní město',
      ward: '',
      wikiId: 'Q1085',
      zipCode: '',
    },
  },
];
```

## Options

| Option      | Type                                           | Default | Description                                              |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------------- |
| **scope**   | `'muni'` \| `'area'` \| `'pubt'` \| `'street'` | null    | Preferred category of results                            |
| **country** | `'cz'` \| `'sk'` \| `'us'` \| `'de'`           | null    | Preferred country (same as bounds but with some presets) |

## License

### Data source

Awesome [Mapy.cz Suggest API](https://api.mapy.cz/view?page=suggestadv) from Seznam.cz

Please read this [license](https://api.mapy.cz/#pact) before use.

### This library

Code of this library is licensed under the [MIT license].

---


Copyright &copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)
