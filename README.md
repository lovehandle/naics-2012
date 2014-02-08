NAICS 2012
==========

NAICS 2012 is a node module containing data from the North American Industrial Classification Specification.

## Installation

```shell
npm install naics-2012
```

## Usage

```javascript
NAICS = require('naics-2012');

NAICS.search('coffee');
//=> [ { code: 926150 }... ]

NAICS.find('926150');
//=> { code: 926150 }

NAICS.above('926150');
//=> [ { code: 92615 }, { code: 9261 }, { code: 926 }, { code: 92 }... ]

NAICS.below('9261');
//=> [ { code: 92615 }, { code: 926150 }... ]
```

## Dataset Indexing

In order to enable keyword-based searches on the NAICS 2012 dataset, we use a reverse index stored in ``/data/data-index.json``. The index is generated by tokenizing relevant properties on NAICS classifications and storing them in an index object keyed by the tokenized text. The index relates keywords to scores that represent the likelihood that a specific keyword is related to a NAICS classification.

In order to rebuild the index run the following command from the project directory:

```shell
$ ./bin/build-index
```

## Contributing

* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a future version unintentionally.
* Commit, do not mess with version (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
* Send me a pull request. Bonus points for topic branches.