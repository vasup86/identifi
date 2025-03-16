
include "poseidon.circom"; // Import Poseidon hash function

template MDLVerifier() {
    signal input issuer;
    signal input id_number;
    signal input date_of_birth;
    signal input signature;

    signal output isValid;

    // Hash inputs using Poseidon
    component hash = Poseidon(4);
    hash.inputs[0] <== issuer;
    hash.inputs[1] <== id_number;
    hash.inputs[2] <== date_of_birth;
    hash.inputs[3] <== signature;

    // Trusted issuer hash (replace with real hash)
    var trustedIssuerHash = 123456789012345;

    // Validate hash
    isValid <== hash.out == trustedIssuerHash;
}

component main = MDLVerifier();