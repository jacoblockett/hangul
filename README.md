# <p align="center">Hangul</p>

*<p align="center">A library dedicated to working with the Korean alphabet, Hangul.</p>*


> ⚠️ This library is still under development and breaking changes may be many until a v1.0.0 version is released. Use with caution.

> ⚠️ This package uses ESM and has no plans to offer a CJS counterpart. Be sure your environment is configured to use ESM.

## Installation

> ⚠️ Until a proper NPM package name is selected, the only way to install this package is to clone the repo directly, or trust `npm` et. al. to install it.

```bash
git clone "https://github.com/jacoblockett/hangul"
```

## Usage

This package comes with many useful functions, and more to come!

- [endsWith](#endswith-)
- [getFinal](#getfinal-)
- [getInitial](#getinitial-)
- [getMedial](#getmedial-)
- [isCompatibilityLetter](#iscompatibilityletter-)
- [isConsonant](#isconsonant-)
- [isConsonantCluster](#isconsonantcluster-)
- [isDiphthong](#isdiphthong-)
- [isDoubleConsonant](#isdoubleconsonant-)
- [isFinal](#isfinal-)
- [isHangul](#ishangul-)
- [isInitial](#isinitial-)
- [isIotizedVowel](#isiotizedvowel-)
- [isMedial](#ismedial-)
- [isNonCompatibilityLetter](#isnoncompatibilityletter-)
- [isSyllable](#issyllable-)
- [isVowel](#isvowel-)
- [join](#join-)
- [split](#split-)
- [startsWith](#startswith-)
- [toIotized](#toiotized-)

### endsWith [🔝](#usage)

Checks if the given search string exists at the end of the given operation string.

#### Signature

```typescript
function endsWith(str: string, options?: {
    decouple: boolean,
}): boolean
```

#### Options

Name|Default Value|Description
---|---|---
decouple|true|Decouples the composite letters before performing the search

#### Example

```javascript
endsWith("한글", "글") // true
endsWith("한글", "ㅡㄹ") // true
endsWith("한글", "한") // false
endsWith("늙다", "ㄱ다") // true
endsWith("늙다", "ㄱ다", { decouple: false }) // false
```

### getFinal [🔝](#usage)

Extracts the final letter from the given Hangul syllable block.

#### Signature

```typescript
function getFinal(str: string, options?: {
    compatibility: boolean,
}): string
```

#### Options

Name|Default Value|Description
---|---|---
compatibility|true|Converts the final letter into its compatibility form

#### Example

```javascript
getFinal("한") // "ㄴ"
getFinal("한", { compatibility: false }) // "ᆫ"
getFinal("하") // ""
```

### getInitial [🔝](#usage)

Extracts the initial letter from the given Hangul syllable block.

#### Signature

```typescript
function getInitial(str: string, options?: {
    compatibility: boolean,
}): string
```

#### Options

Name|Default Value|Description
---|---|---
compatibility|true|Converts the initial letter into its compatibility form

#### Example

```javascript
getInitial("한") // "ㅎ"
getInitial("한", { compatibility: false }) // "ᄒ"
```

### getMedial [🔝](#usage)

Extracts the medial letter from the given Hangul syllable block.

#### Signature

```typescript
function getMedial(str: string, options?: {
    compatibility: boolean,
}): string
```

#### Options

Name|Default Value|Description
---|---|---
compatibility|true|Converts the medial letter into its compatibility form

#### Example

```javascript
getMedial("한") // "ㅏ"
getMedial("한", { compatibility: false }) // "ᅡ"
```

### isCompatibilityLetter [🔝](#usage)

Checks if the given value is a compatibility letter.

#### Signature

```typescript
function isCompatibilityLetter(value: unknown): boolean
```

#### Example

```javascript
isCompatibilityLetter("ㄱ") // true
isCompatibilityLetter("ᄀ") // false
```

### isCompositeConsonant [🔝](#usage)

➡️ ***[isConsonantCluster](#isconsonantcluster-)***

Checks if the given value is a consonant cluster, a cluster of two consonants as one letter.

#### Signature

```typescript
function isCompositeConsonant(value: unknown): boolean
```

#### Example

```javascript
isCompositeConsonant("ㄳ") // true
isCompositeConsonant("ㄱ") // false
```

### isCompositeVowel [🔝](#usage)

➡️ ***[isDiphthong](#isdiphthong-)***

Checks if the given value is a diphthong, a cluster of two vowels as one letter.

#### Signature

```typescript
function isCompositeVowel(value: unknown): boolean
```

#### Example

```javascript
isCompositeVowel("ㅘ") // true
isCompositeVowel("ㅏ") // false
```

### isConsonant [🔝](#usage)

Checks if the given value is consonant.

#### Signature

```typescript
function isConsonant(value: unknown): boolean
```

#### Example

```javascript
isConsonant("ㄱ") // true
isConsonant("ㅏ") // false
```

### isConsonantCluster [🔝](#usage)

➡️ ***[isCompositeConsonant](#iscompositeconsonant-)***

Checks if the given value is a consonant cluster, a cluster of two consonants as one letter.

#### Signature

```typescript
function isConsonantCluster(value: unknown): boolean
```

#### Example

```javascript
isConsonantCluster("ㄳ") // true
isConsonantCluster("ㄱ") // false
```

### isDiphthong [🔝](#usage)

➡️ ***[isCompositeVowel](#iscompositevowel-)***

Checks if the given value is a diphthong, a cluster of two vowels as one letter.

#### Signature

```typescript
function isDiphthong(value: unknown): boolean
```

#### Example

```javascript
isDiphthong("ㅘ") // true
isDiphthong("ㅏ") // false
```

### isDoubleConsonant [🔝](#usage)

Checks if the given value is a double consonant, a cluster of two identical consonants as one letter.

#### Signature

```typescript
function isDoubleConsonant(value: unknown): boolean
```

#### Example

```javascript
isDoubleConsonant("ㄲ") // true
isDoubleConsonant("ㄳ") // false
```

### isFinal [🔝](#usage)

Checks if the given value is a non-compatibility, final consonant.

#### Signature

```typescript
function isFinal(value: unknown): boolean
```

#### Example

```javascript
isFinal("ᆨ") // true
isFinal("ㄱ") // false
```

### isHangul [🔝](#usage)

Checks if the given value is some sort of Hangul characters, either a loose letter or a syllable block. By default, symbols and numbers are allowed to pass. Use the `options.strict` boolean to disallow this behavior.

#### Signature

```typescript
function isHangul(value: unknown, options?: {
    strict: boolean,
}): boolean
```

#### Options

Name|Default Value|Description
---|---|---
strict|false|Disallows symbols and numbers from being considered valid Hangul characters

#### Example

```javascript
isHangul("안녕하세요!") // true
isHangul("안녕하세요!", { strict: true }) // false
```

### isInitial [🔝](#usage)

Checks if the given value is a non-compatibility, initial consonant.

#### Signature

```typescript
function isInitial(value: unknown): boolean
```

#### Example

```javascript
isInitial("ᄀ") // true
isInitial("ㄱ") // false
```

### isIotizedVowel [🔝](#usage)

Checks if the given value is an iotized vowel, one that begins with the /j/ phoneme.

#### Signature

```typescript
function isIotizedVowel(value: unknown): boolean
```

#### Example

```javascript
isIotizedVowel("ㅑ") // true
isIotizedVowel("ㅏ") // false
```

### isMedial [🔝](#usage)

Checks if the given value is a non-compatibility, medial vowel.

#### Signature

```typescript
function isMedial(value: unknown): boolean
```

#### Example

```javascript
isMedial("ᅡ") // true
isMedial("ㅏ") // false
```

### isNonCompatibilityLetter [🔝](#usage)

Checks if the given value is a non-compatibility letter.

#### Signature

```typescript
function isNonCompatibilityLetter(value: unknown): boolean
```

#### Example

```javascript
isNonCompatibilityLetter("ᅡ") // true
isNonCompatibilityLetter("ㅏ") // false
```

### isSyllable [🔝](#usage)

Checks if the given value is a Hangul syllable block.

#### Signature

```typescript
function isSyllable(value: unknown): boolean
```

#### Example

```javascript
isSyllable("한") // true
isSyllable("ㅎ") // false
```

### isVowel [🔝](#usage)

Checks if the given value is a vowel.

#### Signature

```typescript
function isVowel
```

#### Example

```javascript
isVowel("ㅏ") // true
isVowel("ㄱ") // false
```

### join [🔝](#usage)

Joins the given string in a way that would resemble dubeolsik (두벌식) typing. Converts all non-compatibility letters to compatibility letters during this process.

`options.split` is an important consideration as it could drastically change the output. When `true`, this function will deconstruct all valid syllable blocks, then evaluate each individual letter as if they were typed separately. When `false`, however, each syllable block will be parsed as-is. See the examples for an illustration of what this actually looks like.

#### Signature

```typescript
function join(str: string, options?: {
    split: boolean,
}): string
```

#### Options

Name|Default Value|Description
---|---|---
split|true|Splits the string before parsing

#### Example

```javascript
join("ㅎㅏㄴ") // 한
join("ㄱ가") // 까
join("ㄱ가", { split: false }) // ㄱ가
```

### split [🔝](#usage)

Splits the given string, deconstructing all of the hangul syllables into their constituent letters.

#### Signature

```typescript
function split(str: string, options?: {
    group: boolean,
    decouple: boolean,
    compatibility: boolean,
}): string[]|string[][]
```

#### Options

Name|Default Value|Description
---|---|---
group|false|Groups each syllable/grapheme into its own array
decouple|false|Decomposes composite letters into their constituent letters
compatibility|true|Converts all letters from non-compatibility letters to compatibility letters

#### Example

```javascript
split("하다") // ["ㅎ", "ㅏ", "ㄷ", "ㅏ"]
split("했다") // ["ㅎ", "ㅐ", "ㅆ", "ㄷ", "ㅏ"]
split("했다", { decouple: true, compatibility: false }) // ["ᄒ", "ᅢ", "ᆺ", "ᆺ", "ᄃ", "ᅡ"]
```

### startsWith [🔝](#usage)

Checks if the given search string exists at the beginning of the given operation string.

#### Signature

```typescript
function startsWith(str: string, options?: {
    decouple: boolean,
}): boolean
```

#### Options

Name|Default Value|Description
---|---|---
decouple|true|Decouples the composite letters before performing the search

#### Example

```javascript
startsWith("한글", "한") // true
startsWith("한글", "ㅎㅏ") // true
startsWith("한글", "글") // false
startsWith("늙다", "늘") // true
startsWith("늙다", "늘", { decouple: false }) // false
```

### toIotized [🔝](#usage)

Converts all vowels that can be iotized within the given string.

#### Signature

```typescript
function toIotized(str: string): string
```

#### Example

```javascript
toIotized("ㅏ") // "ㅑ"
toIotized("한국") // "햔귝"
```

---
***<p align="center">©️ 2024 Jacob Lockett</p>***